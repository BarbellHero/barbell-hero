export default async function(context) {
  const { store, redirect, route } = context;
  const { auth } = store.state;
  await store.dispatch("auth/authenticate");
  const authenticated = store.getters["auth/authenticated"];
  if (!auth.publicPages.includes(route.name) && !authenticated) {
    return redirect("/login");
  }
}
