import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";

import { NgtCreatedState, NgtTriplet } from "@angular-three/core";

import { BoxProps, GetByIndex, SphereProps } from "@angular-three/cannon";
import { Camera, Ray, Vector3 } from "three";
import { ViewChild } from "@angular/core";
import { NgtPhysicSphere } from "@angular-three/cannon/bodies";

class Projectile {
  constructor(public position: NgtTriplet, public ttl: number = 30) { }
}
class Target {
  constructor(public position: NgtTriplet, public color: string) { }
}

@Component({
  selector: 'app-kinematics',
  templateUrl: './kinematics.component.html',
  styleUrls: ['./kinematics.component.scss']
})
export class KinematicsComponent  implements AfterViewInit {
  @ViewChild('player') player!: NgtPhysicSphere;

  projectiles: Array<Projectile> = [];
  cubes: Array<Target> = [];

  playerRadius = 0.5;
  ballRadius = 0.1;

  private camera!: Camera;

  constructor(private cd: ChangeDetectorRef) {
    for (let i = 0; i < 30; i++) {
      this.cubes.push(new Target([
        -10 + Math.random() * 20,
        Math.random() + 1,
        -10 + Math.random() * 20
      ], '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0')));
    }
  }

  ngAfterViewInit(): void {
    // if setInterval is removed, will need to call detectChanges below
    setInterval(() => {
      this.projectiles.forEach((item, index) => {
        item.ttl--;
        if (item.ttl <= 0) {
         this.projectiles.splice(index, 1)
        }
      })
    }, 100);
  }

  created(event: NgtCreatedState) {
    this.camera = event.camera;
  }
  //event after canvas was created is used to copy camera object locally
  getCubeProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: 1,
      material: { friction: 0, restitution: 0.3 },
      args: [1, 1, 1],
    }
  )

  getBallProps: GetByIndex<SphereProps> = (index: number) => (
    {
      mass: 2,
      args: [this.ballRadius]
    }
  )

  private getShootDirection(): Vector3 {
    const vector = new Vector3(0, 0, 1)
    vector.unproject(this.camera)
    const ray = new Ray(this.camera.position, vector.sub(this.camera.position).normalize())
    return ray.direction;
  }


  shoot() {
    const shootDirection = this.getShootDirection()

    // position the ball to bounce off the player sphere
    const position = [
      this.camera.position.x + shootDirection.x * (this.playerRadius * 1.01 + this.ballRadius),
      this.camera.position.y + shootDirection.y * (this.playerRadius * 1.01 + this.ballRadius),
      this.camera.position.z + shootDirection.z * (this.playerRadius * 1.01 + this.ballRadius),
    ] as NgtTriplet;

    this.projectiles.push(new Projectile(position));

    // if setInterval is removed above, need to uncomment for ball to appear
    //this.cd.detectChanges();
  }
//add projectiles after getting the shoot direction and position
  tick() {
    this.player.api.position.copy(this.camera.position);
  }
}
//sphere position moves with camera


import {  EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgtCanvasStore, NgtRender } from '@angular-three/core';

//
// adapted from three.js games fps example https://github.com/mrdoob/three.js/blob/master/examples/games_fps.html
//
@Component({
  selector: 'first-person-controls',
  template: '<ngt-group (ready)="ready()" (animateReady)="animate($event.state)"></ngt-group>'
})
export class FirstPersonControlsComponent implements OnDestroy {
  @Input() container: HTMLElement = document.body;
  @Input() viewerheight = 1.5;
  @Input() movespeed = 1;
  @Input() rotatefactor = 2000;

  @Output() shoot = new EventEmitter();

  private keyStates = new Map<string, boolean>([]);
  private camera!: Camera;

  private cleanup!: () => void;

  constructor(private canvasStore: NgtCanvasStore) { }

  ngOnDestroy(): void {
    this.cleanup();
  }

  ready() {
    const camera = this.canvasStore.get((s) => s.camera);
    camera.rotation.order = 'YXZ';
    this.camera = camera;

    // movement
    const keydown = (event: KeyboardEvent) => {
      this.keyStates.set(event.code, true);
    }
    document.addEventListener('keydown', keydown);

    const keyup = (event: KeyboardEvent) => {
      this.keyStates.set(event.code, false);
    }
    document.addEventListener('keyup', keyup);

    const mousedown = () => {
      document.body.requestPointerLock();
    }
    this.container.addEventListener('mousedown', mousedown);

    const mouseup = () => {
      this.shoot.emit();
    }
    document.body.addEventListener('mouseup', mouseup);

    // rotation
    const mousemove = (event: MouseEvent) => {
      if (document.pointerLockElement === document.body) {
        camera.rotation.y -= event.movementX / this.rotatefactor;
        camera.rotation.x -= event.movementY / this.rotatefactor;
      }
    }
    document.body.addEventListener('mousemove', mousemove);

    this.cleanup = () => {
      document.exitPointerLock();
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('keyup', keyup);
      this.container.removeEventListener('mousedown', mousedown);
      document.body.removeEventListener('mouseup', mouseup);
      document.body.removeEventListener('mousemove', mousemove);
    }
  }

  private getForwardVector(): Vector3 {
    const playerDirection = new Vector3()

    this.camera.getWorldDirection(playerDirection);
    playerDirection.y = 0;
    playerDirection.normalize();

    return playerDirection;
  }

  private getSideVector(): Vector3 {
    const playerDirection = new Vector3()

    this.camera.getWorldDirection(playerDirection);
    playerDirection.y = 0;
    playerDirection.normalize();
    playerDirection.cross(this.camera.up);

    return playerDirection;
  }

  private playerVelocity = new Vector3();

  private updateVelocity(deltaTime: number) {
    const speedDelta = deltaTime * 8;

    if (this.keyStates.get('KeyW') || this.keyStates.get('ArrowUp')) {
      this.playerVelocity.add(this.getForwardVector().multiplyScalar(speedDelta));
    }

    if (this.keyStates.get('KeyS') || this.keyStates.get('ArrowDown')) {
      this.playerVelocity.add(this.getForwardVector().multiplyScalar(-speedDelta));
    }

    //if (this.keyStates.get('KeyA' || this.keyStates.get('ArrowLeft'))) {
      //this.playerVelocity.add(this.getSideVector().multiplyScalar(-speedDelta));
    //}

    if (this.keyStates.get('KeyD') || this.keyStates.get('ArrowRight')) {
      this.playerVelocity.add(this.getSideVector().multiplyScalar(speedDelta));
    }
  }

  private moveCamera(deltaTime: number) {
    // slow after mouse up
    let damping = Math.exp(-3 * deltaTime) - 1;

    this.playerVelocity.addScaledVector(this.playerVelocity, damping);

    const deltaPosition = this.playerVelocity.clone().multiplyScalar(deltaTime);
    if (this.camera) {
      this.camera.position.add(deltaPosition);
      this.camera.position.y = this.viewerheight;
    }
  }

  animate({ delta }: NgtRender) {
    this.updateVelocity(delta * this.movespeed);  // check for input
    this.moveCamera(delta); // move player
  }
}
