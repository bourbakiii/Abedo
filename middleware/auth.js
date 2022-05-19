export default function ({ app, store, redirect, next, ...additional }) {
  if (!(app.$cookies.get('account'))?.token) {
    if(!process.server)
    {
    store.commit("modals/open", { modal_name: "login" })
    next(false);
    }
    else redirect('/');
  }
}