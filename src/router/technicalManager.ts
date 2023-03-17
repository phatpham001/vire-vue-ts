const technicalManager = [
  {
    path: "/technical",
    component: () => import("../layouts/technicalManagerLayout.vue"),
    children: [
      {
        path: "user",
        name: "technical-listuser",
        component: () =>
          import("../views/technicalManagerment/listUser/listUser.vue"),
      },
      {
        path: "filter",
        name: "technical-filter",
        component: () =>
          import("../views/technicalManagerment/filter/filter.vue"),
      },
      {
        path: "import",
        name: "technical-importExel",
        component: () =>
          import("../views/technicalManagerment/importExel/importExel.vue"),
      },
    ],
  },
];

export default technicalManager;
