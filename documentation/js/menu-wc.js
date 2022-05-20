'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angularthree13.2.0 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a11fd354a6af6d43b25b455fce8518227292350794b52dbbfd675916fca80740cabe60d8680135a71960f268592fe3bc2f619ce6c62a2b9824d5594183c490b4"' : 'data-target="#xs-components-links-module-AppModule-a11fd354a6af6d43b25b455fce8518227292350794b52dbbfd675916fca80740cabe60d8680135a71960f268592fe3bc2f619ce6c62a2b9824d5594183c490b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a11fd354a6af6d43b25b455fce8518227292350794b52dbbfd675916fca80740cabe60d8680135a71960f268592fe3bc2f619ce6c62a2b9824d5594183c490b4"' :
                                            'id="xs-components-links-module-AppModule-a11fd354a6af6d43b25b455fce8518227292350794b52dbbfd675916fca80740cabe60d8680135a71960f268592fe3bc2f619ce6c62a2b9824d5594183c490b4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppSharedModule.html" data-type="entity-link" >AppSharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BeforeLoginModule.html" data-type="entity-link" >BeforeLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BeforeLoginModule-928873835cfd3a50baca0ad56c01385bcc2912183e801606ab9b740a1807a1fa644ee7c0a80b77aa2eb2cfee6602eff177c362aab9efeb3e092959b0aafda753"' : 'data-target="#xs-components-links-module-BeforeLoginModule-928873835cfd3a50baca0ad56c01385bcc2912183e801606ab9b740a1807a1fa644ee7c0a80b77aa2eb2cfee6602eff177c362aab9efeb3e092959b0aafda753"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BeforeLoginModule-928873835cfd3a50baca0ad56c01385bcc2912183e801606ab9b740a1807a1fa644ee7c0a80b77aa2eb2cfee6602eff177c362aab9efeb3e092959b0aafda753"' :
                                            'id="xs-components-links-module-BeforeLoginModule-928873835cfd3a50baca0ad56c01385bcc2912183e801606ab9b740a1807a1fa644ee7c0a80b77aa2eb2cfee6602eff177c362aab9efeb3e092959b0aafda753"' }>
                                            <li class="link">
                                                <a href="components/BeforeLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeforeLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BeforeLoginRoutingModule.html" data-type="entity-link" >BeforeLoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefaultSpotLightModule.html" data-type="entity-link" >DefaultSpotLightModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefaultSpotLightModule-3e91f70172dc2142e0f07f5fbab248cb767531d10f58c3b32b9d0a5dcdbef1c5cb37c386ab7ac6db51adabacb74a3f8ac066346316331678781e5d44add9fa12"' : 'data-target="#xs-components-links-module-DefaultSpotLightModule-3e91f70172dc2142e0f07f5fbab248cb767531d10f58c3b32b9d0a5dcdbef1c5cb37c386ab7ac6db51adabacb74a3f8ac066346316331678781e5d44add9fa12"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefaultSpotLightModule-3e91f70172dc2142e0f07f5fbab248cb767531d10f58c3b32b9d0a5dcdbef1c5cb37c386ab7ac6db51adabacb74a3f8ac066346316331678781e5d44add9fa12"' :
                                            'id="xs-components-links-module-DefaultSpotLightModule-3e91f70172dc2142e0f07f5fbab248cb767531d10f58c3b32b9d0a5dcdbef1c5cb37c386ab7ac6db51adabacb74a3f8ac066346316331678781e5d44add9fa12"' }>
                                            <li class="link">
                                                <a href="components/DefaultSpotLight.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultSpotLight</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SimpleCubeComponentModule.html" data-type="entity-link" >SimpleCubeComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SimpleCubeComponentModule-ba39fa3743e3086ccf06a4d668958cabaa747717a348044dd3cec38de27d1a46efcccd7eafc4d7afd6860c346a267b4c027ebd8e2247489e3e4624fd70a9b0a4"' : 'data-target="#xs-components-links-module-SimpleCubeComponentModule-ba39fa3743e3086ccf06a4d668958cabaa747717a348044dd3cec38de27d1a46efcccd7eafc4d7afd6860c346a267b4c027ebd8e2247489e3e4624fd70a9b0a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SimpleCubeComponentModule-ba39fa3743e3086ccf06a4d668958cabaa747717a348044dd3cec38de27d1a46efcccd7eafc4d7afd6860c346a267b4c027ebd8e2247489e3e4624fd70a9b0a4"' :
                                            'id="xs-components-links-module-SimpleCubeComponentModule-ba39fa3743e3086ccf06a4d668958cabaa747717a348044dd3cec38de27d1a46efcccd7eafc4d7afd6860c346a267b4c027ebd8e2247489e3e4624fd70a9b0a4"' }>
                                            <li class="link">
                                                <a href="components/CubeComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleCubeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleCubeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThreejsBasicModule.html" data-type="entity-link" >ThreejsBasicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThreejsBasicModule-fc99c9f636cba1619b24f0cb40c61bf507d4eda78c9f6daa28b188587f1c212255e7fc2596cdf31254ab25725222106d1450f0d759dd8c0762657bd80c5ddd0e"' : 'data-target="#xs-components-links-module-ThreejsBasicModule-fc99c9f636cba1619b24f0cb40c61bf507d4eda78c9f6daa28b188587f1c212255e7fc2596cdf31254ab25725222106d1450f0d759dd8c0762657bd80c5ddd0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThreejsBasicModule-fc99c9f636cba1619b24f0cb40c61bf507d4eda78c9f6daa28b188587f1c212255e7fc2596cdf31254ab25725222106d1450f0d759dd8c0762657bd80c5ddd0e"' :
                                            'id="xs-components-links-module-ThreejsBasicModule-fc99c9f636cba1619b24f0cb40c61bf507d4eda78c9f6daa28b188587f1c212255e7fc2596cdf31254ab25725222106d1450f0d759dd8c0762657bd80c5ddd0e"' }>
                                            <li class="link">
                                                <a href="components/BoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CameracontrolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CameracontrolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CannonClumpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CannonClumpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CannonCompoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CannonCompoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CannonKinematicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CannonKinematicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CannonSingleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CannonSingleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CannonSphereComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CannonSphereComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CannonStartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CannonStartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClumpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClumpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubeCannonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubeCannonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubeSingleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubeSingleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubedemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubedemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubelightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubelightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubespotlightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubespotlightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CubestateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CubestateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoCubeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoCubeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EarthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EarthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EarthMarkerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EarthMarkerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FirstPersonControlsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FirstPersonControlsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FloorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FloorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstancedSpheresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstancedSpheresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KInstancedSpheresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KInstancedSpheresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KPlaneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KPlaneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KeenBloomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeenBloomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KeenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KinematicCubeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KinematicCubeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KinematicsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KinematicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarkerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarkerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarmiRxstateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarmiRxstateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneCompoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneCompoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneSingleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneSingleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaneSphereComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaneSphereComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PointerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PointerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PresenterPatternSolution.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresenterPatternSolution</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipePreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipePreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RxstateExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RxstateExampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RxstatePresenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RxstatePresenterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScalableBallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScalableBallComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideEffectsSolution.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideEffectsSolution</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobaBillboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SobaBillboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpincubeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpincubeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThreejsBasicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThreejsBasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransformControlsDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransformControlsDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TwospinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwospinComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThreejsBasicRoutingModule.html" data-type="entity-link" >ThreejsBasicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThreejsSobaModule.html" data-type="entity-link" >ThreejsSobaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThreejsSobaModule-e073bff9d86ea4007d7fbb26d261abad17205d8393d258832dbe8cffe1bda8a7454851df5b5e21cc4ea0273c1a802756da4c1cc5f4424bdcc631a858aa83fad9"' : 'data-target="#xs-components-links-module-ThreejsSobaModule-e073bff9d86ea4007d7fbb26d261abad17205d8393d258832dbe8cffe1bda8a7454851df5b5e21cc4ea0273c1a802756da4c1cc5f4424bdcc631a858aa83fad9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThreejsSobaModule-e073bff9d86ea4007d7fbb26d261abad17205d8393d258832dbe8cffe1bda8a7454851df5b5e21cc4ea0273c1a802756da4c1cc5f4424bdcc631a858aa83fad9"' :
                                            'id="xs-components-links-module-ThreejsSobaModule-e073bff9d86ea4007d7fbb26d261abad17205d8393d258832dbe8cffe1bda8a7454851df5b5e21cc4ea0273c1a802756da4c1cc5f4424bdcc631a858aa83fad9"' }>
                                            <li class="link">
                                                <a href="components/AbsBillboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbsBillboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AbsGizmoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbsGizmoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AbsGradientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbsGradientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AbsLineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbsLineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AbsTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbsTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CamOthroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CamOthroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ControlLockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ControlLockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ControlTransformComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ControlTransformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultCameraShakeScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultCameraShakeScene</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultCenter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultCenter</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultGizmo.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultGizmo</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiscHtmlComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiscHtmlComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfDetailedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfDetailedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageCenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageCenterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageEnvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageEnvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageShadowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageShadowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageShakeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageShakeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageSkyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageSkyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageSpotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageSpotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageStageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageStageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StageStarsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StageStarsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThreejsSobaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThreejsSobaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThreejsSobaRoutingModule.html" data-type="entity-link" >ThreejsSobaRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OptionsComponent-1.html" data-type="entity-link" >OptionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageComponent.html" data-type="entity-link" >PageComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MockLoadDataService.html" data-type="entity-link" >MockLoadDataService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockRouterDataService.html" data-type="entity-link" >MockRouterDataService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Projectile.html" data-type="entity-link" >Projectile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Target.html" data-type="entity-link" >Target</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/Adapter.html" data-type="entity-link" >Adapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListService.html" data-type="entity-link" >ListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Presenter.html" data-type="entity-link" >Presenter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserdataService.html" data-type="entity-link" >UserdataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ComponentState.html" data-type="entity-link" >ComponentState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComponentState-1.html" data-type="entity-link" >ComponentState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DemoBasicsItem.html" data-type="entity-link" >DemoBasicsItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DemoBasicsItem-1.html" data-type="entity-link" >DemoBasicsItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DemoBasicsItem-2.html" data-type="entity-link" >DemoBasicsItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ingredient.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListServerItem.html" data-type="entity-link" >ListServerItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListServiceState.html" data-type="entity-link" >ListServiceState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Quantity.html" data-type="entity-link" >Quantity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Recipe.html" data-type="entity-link" >Recipe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/stagestatege.html" data-type="entity-link" >stagestatege</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});