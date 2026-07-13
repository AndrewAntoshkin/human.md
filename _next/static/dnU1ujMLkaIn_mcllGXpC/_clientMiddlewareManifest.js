self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/human\\.md(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()