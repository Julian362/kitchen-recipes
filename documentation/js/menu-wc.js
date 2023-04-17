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
                    <a href="index.html" data-type="index-link">kitchen-recipes documentation</a>
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
                                            'data-target="#controllers-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' : 'data-target="#xs-controllers-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' :
                                            'id="xs-controllers-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' }>
                                            <li class="link">
                                                <a href="controllers/KitchenRecipesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KitchenRecipesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' : 'data-target="#xs-injectables-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' :
                                        'id="xs-injectables-links-module-AppModule-6db7b29324806bb195aa1662723233b4fb7d3287ffc24b12fadecf366f73dfb4530e951026256b8dd9d061e651e8c823e64ba6e1c7443b4cef2a1f773f7e80b9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfrastructureModule.html" data-type="entity-link" >InfrastructureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InfrastructureModule-cee5c4c77c0a87e00c278e97959dc90d5378f77f2bfda33719e9e1c3406a86ac491361c80828c069b2aee6ba2d6544458385cf0f53529b7a4e19c57ac147d1fc"' : 'data-target="#xs-injectables-links-module-InfrastructureModule-cee5c4c77c0a87e00c278e97959dc90d5378f77f2bfda33719e9e1c3406a86ac491361c80828c069b2aee6ba2d6544458385cf0f53529b7a4e19c57ac147d1fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InfrastructureModule-cee5c4c77c0a87e00c278e97959dc90d5378f77f2bfda33719e9e1c3406a86ac491361c80828c069b2aee6ba2d6544458385cf0f53529b7a4e19c57ac147d1fc"' :
                                        'id="xs-injectables-links-module-InfrastructureModule-cee5c4c77c0a87e00c278e97959dc90d5378f77f2bfda33719e9e1c3406a86ac491361c80828c069b2aee6ba2d6544458385cf0f53529b7a4e19c57ac147d1fc"' }>
                                        <li class="link">
                                            <a href="injectables/IngredientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MealPlannerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealPlannerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RecipeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MongoModule.html" data-type="entity-link" >MongoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MongoModule-73546050c31c03058dfd75643ffec824e93e5361fb0336a2fa0eabef0294b4ef81d73bb57dfdeae959ad3d7040ed1501a7edaf7fe32c3ab575a7c30465d2178d"' : 'data-target="#xs-injectables-links-module-MongoModule-73546050c31c03058dfd75643ffec824e93e5361fb0336a2fa0eabef0294b4ef81d73bb57dfdeae959ad3d7040ed1501a7edaf7fe32c3ab575a7c30465d2178d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MongoModule-73546050c31c03058dfd75643ffec824e93e5361fb0336a2fa0eabef0294b4ef81d73bb57dfdeae959ad3d7040ed1501a7edaf7fe32c3ab575a7c30465d2178d"' :
                                        'id="xs-injectables-links-module-MongoModule-73546050c31c03058dfd75643ffec824e93e5361fb0336a2fa0eabef0294b4ef81d73bb57dfdeae959ad3d7040ed1501a7edaf7fe32c3ab575a7c30465d2178d"' }>
                                        <li class="link">
                                            <a href="injectables/IngredientMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IngredientRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MealPlannerMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealPlannerMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MealPlannerRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MealPlannerRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MongooseConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongooseConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RecipeMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RecipeRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserMongoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMongoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/KitchenRecipesController.html" data-type="entity-link" >KitchenRecipesController</a>
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
                                <a href="classes/AmountDto.html" data-type="entity-link" >AmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AmountDto-1.html" data-type="entity-link" >AmountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateIngredientDto.html" data-type="entity-link" >CreateIngredientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateIngredientUseCase.html" data-type="entity-link" >CreateIngredientUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMealPlannerDto.html" data-type="entity-link" >CreateMealPlannerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMealPlannerUseCase.html" data-type="entity-link" >CreateMealPlannerUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRecipeDto.html" data-type="entity-link" >CreateRecipeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRecipeUseCase.html" data-type="entity-link" >CreateRecipeUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserUseCase.html" data-type="entity-link" >CreateUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/Delegate.html" data-type="entity-link" >Delegate</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteMealPlannerUseCase.html" data-type="entity-link" >DeleteMealPlannerUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteRecipeUseCase.html" data-type="entity-link" >DeleteRecipeUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteUserUseCase.html" data-type="entity-link" >DeleteUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllIngredientUseCase.html" data-type="entity-link" >GetAllIngredientUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllRecipesUseCase.html" data-type="entity-link" >GetAllRecipesUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetIngredientByNameUseCase.html" data-type="entity-link" >GetIngredientByNameUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetIngredientUseCase.html" data-type="entity-link" >GetIngredientUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetMealPlannerUseCase.html" data-type="entity-link" >GetMealPlannerUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetRecipeUseCase.html" data-type="entity-link" >GetRecipeUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserUseCase.html" data-type="entity-link" >GetUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/IngredientDomainModel.html" data-type="entity-link" >IngredientDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/IngredientDto.html" data-type="entity-link" >IngredientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/IngredientModel.html" data-type="entity-link" >IngredientModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/IngredientMongo.html" data-type="entity-link" >IngredientMongo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ingredients.html" data-type="entity-link" >Ingredients</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtErrorExceptionFilter.html" data-type="entity-link" >JwtErrorExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/MealPlannerDomainModel.html" data-type="entity-link" >MealPlannerDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/MealPlannerModel.html" data-type="entity-link" >MealPlannerModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/MealPlannerMongo.html" data-type="entity-link" >MealPlannerMongo</a>
                            </li>
                            <li class="link">
                                <a href="classes/MongoServerErrorExceptionFilter.html" data-type="entity-link" >MongoServerErrorExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipeDomainModel.html" data-type="entity-link" >RecipeDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipeMongo.html" data-type="entity-link" >RecipeMongo</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipesModel.html" data-type="entity-link" >RecipesModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIngredientDto.html" data-type="entity-link" >UpdateIngredientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIngredientUseCase.html" data-type="entity-link" >UpdateIngredientUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMealPlannerDto.html" data-type="entity-link" >UpdateMealPlannerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMealPlannerUseCase.html" data-type="entity-link" >UpdateMealPlannerUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRecipeDto.html" data-type="entity-link" >UpdateRecipeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRecipeUseCase.html" data-type="entity-link" >UpdateRecipeUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDomainModel.html" data-type="entity-link" >UserDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMongo.html" data-type="entity-link" >UserMongo</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IngredientMongoService.html" data-type="entity-link" >IngredientMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IngredientRepository.html" data-type="entity-link" >IngredientRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IngredientService.html" data-type="entity-link" >IngredientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MealPlannerMongoService.html" data-type="entity-link" >MealPlannerMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MealPlannerRepository.html" data-type="entity-link" >MealPlannerRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MealPlannerService.html" data-type="entity-link" >MealPlannerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongooseConfigService.html" data-type="entity-link" >MongooseConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecipeMongoService.html" data-type="entity-link" >RecipeMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecipeRepository.html" data-type="entity-link" >RecipeRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecipeService.html" data-type="entity-link" >RecipeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMongoService.html" data-type="entity-link" >UserMongoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateMongoId.html" data-type="entity-link" >ValidateMongoId</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
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
                                <a href="interfaces/IAuthService.html" data-type="entity-link" >IAuthService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseRepository.html" data-type="entity-link" >IBaseRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateMealPlannerDto.html" data-type="entity-link" >ICreateMealPlannerDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateRecipeDto.html" data-type="entity-link" >ICreateRecipeDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateUserDto.html" data-type="entity-link" >ICreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFindAll.html" data-type="entity-link" >IFindAll</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIngredientDomainModel.html" data-type="entity-link" >IIngredientDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIngredientService.html" data-type="entity-link" >IIngredientService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMealPlannerDomainModel.html" data-type="entity-link" >IMealPlannerDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMealPlannerService.html" data-type="entity-link" >IMealPlannerService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRecipeDomainModel.html" data-type="entity-link" >IRecipeDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRecipeService.html" data-type="entity-link" >IRecipeService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateIngredientDto.html" data-type="entity-link" >IUpdateIngredientDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateMealPlannerDto.html" data-type="entity-link" >IUpdateMealPlannerDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateRecipesDto.html" data-type="entity-link" >IUpdateRecipesDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateRepository.html" data-type="entity-link" >IUpdateRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUseCase.html" data-type="entity-link" >IUseCase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserDomainModel.html" data-type="entity-link" >IUserDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserService.html" data-type="entity-link" >IUserService</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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