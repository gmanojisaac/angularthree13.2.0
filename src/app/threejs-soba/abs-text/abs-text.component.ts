import { Component,ChangeDetectionStrategy } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-abs-text',
  templateUrl: './abs-text.component.html',
  styleUrls: ['./abs-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsTextComponent  {
  cameraPosition: [number, number, number] = [0, 0, 100];
  cameraFov: number = 75;
  lights = true;
  controls = true;
  makeControlsDefault = false;
  black = true;
  loader = false;
  DoubleSide= THREE.DoubleSide;
  /*text= `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
  MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
  CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.
  EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.`; */

  text = `ان عدة الشهور عند الله اثنا عشر شهرا في كتاب الله يوم خلق السماوات والارض
  SOME LATIN TEXT HERE منها اربعة حرم ذلك الدين القيم فلاتظلموا فيهن انفسكم
  وقاتلوا المشركين كافة كما يقاتلونكم كافة واعلموا ان الله مع المتقين
  `;
  
  constructor() { }

  ngOnInit(): void {
  }
  turnAnimate(object: THREE.Object3D) {
    object.rotation.y += 0.01;
}
}
