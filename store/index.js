// tslint:disable:no-shadowed-variable
// tslint:disable:quotemark
export const state = () => ({
    locale: 'en',
    locales: ['en', 'es'],
});

export const mutations = {
    // tslint:disable-next-line:no-shadowed-variable
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
};

export const actions = {
    selectLocale({ commit }, locale) {
        commit('SET_LANG', locale);
    },
};

export const getters = {
    getLocale: (state) => state.locale,
    getLocales: (state) => state.locales,
};
