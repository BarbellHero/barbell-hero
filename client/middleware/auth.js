export default async function(context) {
  const { app, redirect, route } = context;
  const auth = app.$apiState("auth");
  try {
    await app.$apiDispatch("auth/authenticate", null, {
      suppressNotifications: true
    });
  } catch (e) {
    await app.$apiDispatch("auth/logout"); // flush invalid JWT
  }
  const authenticated = app.$apiGet("auth/authenticated");
  if (!auth.publicPages.includes(route.name) && !authenticated) {
    return redirect("/login");
  }
}
