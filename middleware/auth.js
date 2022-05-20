export default function ({ app, store, redirect, next, ...additional }) {
  if (!(app.$cookies.get('token'))) {
    if(!process.server)
    {
    store.commit("modals/open", { modal_name: "login" })
    next(false);
    }
    else redirect('/');
  }
}