// Detect the user's device platform
const userAgent = navigator.userAgent || navigator.vendor || window.opera;

// Figma Deep Link
const figmaDeepLink = "figma://file/lPOfctNuCvyMTKD2MaszOG";

// Figma Browser Link
const figmaBrowserLink =
  "https://embed.figma.com/proto/lPOfctNuCvyMTKD2MaszOG/App-Mockup?node-id=1-7&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&show-proto-sidebar=1&embed-host=share";

// Redirect logic
if (/android/i.test(userAgent)) {
  // Android: Redirect to Play Store or use deep link
  window.location.href = "https://play.google.com/store/apps/details?id=com.figma.mirror";
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  // iOS: Redirect to App Store or use deep link
  window.location.href = "https://itunes.apple.com/app/figma-mirror/id1152747299";
} else {
  // Desktop or fallback: Try deep link first, then redirect to browser
  setTimeout(() => {
    window.location.href = figmaBrowserLink;
  }, 500); // Wait for half a second before falling back
  window.location.href = figmaDeepLink;
}
