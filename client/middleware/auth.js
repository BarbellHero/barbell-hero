export default async function(context) {
  const { app, redirect, route } = context;
  const auth = app.$apiState("auth");
  try {
    await app.$apiDispatch("auth/authenticate");
  } catch (e) {
    /* no JWT found */
  }
  const authenticated = app.$apiGet("auth/authenticated");
  if (!auth.publicPages.includes(route.name) && !authenticated) {
    return redirect("/login");
  }
}
