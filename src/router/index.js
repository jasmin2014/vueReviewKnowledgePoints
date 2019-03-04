import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("../pages/home.vue")
    },
    {
      path: "/test-api-whatch",
      name: "testApiWatchPage",
      component: () => import("../pages/vueReviewPages/testApiWatch.vue")
    },
    {
      path: "/test-directive-v-for",
      name: "testDirectiveVForPage",
      component: () => import("../pages/vueReviewPages/testDirectiveVFor.vue")
    },
    {
      path: "/test-directive-v-for-delete",
      name: "testDirectiveVForDeletePage",
      component: () =>
        import("../pages/vueReviewPages/testDirectiveVForDelete.vue")
    },
    {
      path: "/test-api-v-model-checkbox",
      name: "testApiVModelCheckboxPage",
      component: () =>
        import("../pages/vueReviewPages/testApiVModelCheckbox.vue")
    },
    {
      path: "/test-keep-base-listerners-input",
      name: "testKeepBaseListernersInputPage",
      component: () =>
        import("../pages/vueReviewPages/testKeepBaseListernersInput.vue")
    },
    {
      path: "/test-comp-slot",
      name: "testCompSlotPage",
      component: () => import("../pages/vueReviewPages/testCompSlot.vue")
    },
    {
      path: "/test-comp-dep-injection",
      name: "testCompDepInjectionPage",
      component: () =>
        import("../pages/vueReviewPages/testCompDepInjection.vue")
    },
    {
      path: "/test-comp-dynamic",
      name: "testCompDyNamicPage",
      component: () => import("../pages/vueReviewPages/testCompDyNamic.vue")
    },
    {
      path: "/test-comp-recursive",
      name: "testCompRecursivePage",
      component: () => import("../pages/vueReviewPages/testCompRecursive.vue")
    },
    {
      path: "/test-comp-loop",
      name: "testCompLoopPage",
      component: () => import("../pages/vueReviewPages/testComploop.vue")
    },
    {
      path: "/test-comp-inline-template",
      name: "testCompInlineTemplatePage",
      component: () =>
        import("../pages/vueReviewPages/testCompInlineTemplate.vue")
    },
    {
      path: "/test-api-transition",
      name: "testApiTransitionPage",
      component: () => import("../pages/vueReviewPages/testApiTransition.vue")
    },
    {
      path: "/test-functional-comp",
      name: "myFunctionalComponents",
      component: () => import("../pages/vueReviewPages/testFunctionalComp.vue")
    },
    {
      path: "/test-api-animated",
      name: "testApiComponentsPage",
      component: () => import("../pages/vueReviewPages/testApiAnimated.vue")
    },
    {
      path: "/test-mixins-comp",
      name: "testMixinComponentsPage",
      component: () => import("../pages/vueReviewPages/testMixinComponents.vue")
    },
    {
      path: "/test-directive",
      name: "testApiDirectivePage",
      component: () => import("../pages/vueReviewPages/testApiDirectives.vue")
    },
    {
      path: "/test-render-comp",
      name: "testRenderComponentPage",
      component: () => import("../pages/vueReviewPages/testRenderComp.vue")
    },
    {
      path: "/test-plugn-vue-table2",
      name: "testTheVueUIPluginPage1",
      component: () => import("../pages/vueReviewPages/testTheVueUIPlugin.vue")
    },
    {
      path: "/test-deep-response",
      name: "testTheDeepResponsePage",
      component: () => import("../pages/vueReviewPages/testTheDeepResponse.vue")
    },
    {
      path: "/test-the-before-route-enter",
      name: "testTheTransitionRouteComponentsPage",
      component: () =>
        import("../pages/vueReviewPages/testTheTransitionRouteComponents.vue")
    },
    {
      path: "/test-the-api-vuex",
      name: "testTheApiVuexPage",
      component: () => import("../pages/vueReviewPages/testApiVuex.vue")
    },
    {
      path: "/test-the-scroll-event",
      name: "testTheScrollEventPage",
      component: () => import("../pages/vueReviewPages/testTheScrollEvent.vue")
    },
    {
      path: "/test-the-css-flex",
      name: "testTheCssFlexPage",
      component: () => import("../pages/newCssReviewPages/testTheCssFlex.vue")
    },
    {
      path: "/test-the-css-grid",
      name: "testTheCssGridPage",
      component: () => import("../pages/newCssReviewPages/testTheCssGrid.vue")
    }
  ]
});
