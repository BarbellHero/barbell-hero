export default async function(context) {
  const { store, redirect, route } = context;
  const { auth } = store.state;
  try {
    await store.dispatch("auth/authenticate");
  } catch (e) {
    /* no JWT found */
  }
  const authenticated = store.getters["auth/authenticated"];
  if (!auth.publicPages.includes(route.name) && !authenticated) {
    return redirect("/login");
  }
}
