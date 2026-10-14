const PC_SITE = "https://abnormal-shop.vercel.app";
const PHONE_SITE = "https://abnormal-store.vercel.app";

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);

  // Optional manual override:
  // ?view=desktop sends to the PC site
  // ?view=mobile sends to the phone site
  const view = url.searchParams.get("view");
  let destination;

  if (view === "desktop") {
    destination = PC_SITE;
  } else if (view === "mobile") {
    destination = PHONE_SITE;
  } else {
    const ua = request.headers.get("user-agent") || "";
    const isMobile =
      /Android|iPhone|iPod|Mobile|Windows Phone|IEMobile/i.test(ua);

    destination = isMobile ? PHONE_SITE : PC_SITE;
  }

  // Keep the requested path and other query parameters.
  // Remove the manual routing override so it doesn't leak to the storefront.
  const target = new URL(url.pathname + url.search, destination);
  target.searchParams.delete("view");

  return Response.redirect(target.toString(), 307);
}
