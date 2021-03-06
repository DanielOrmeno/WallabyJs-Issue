// tslint:disable:quotemark
export default function({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacemest, ignore it
  if (isHMR) {
    return;
  }
  // Get locale from params
  const locale = params.lang || 'es';
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 });
  }
  // Set locale
  store.commit('SET_LANG', locale);
  app.i18n.locale = store.state.locale;
  // If route is /es/... -> redirect to /...
  if (locale === 'es' && route.fullPath.indexOf('/es') === 0) {
    return redirect(route.fullPath.replace(/^\/es/, '/'));
  }
}
