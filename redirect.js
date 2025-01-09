// Detect the user's device platform
const userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
  // Redirect to the Play Store for Android users
  window.location.href = "https://play.google.com/store/apps/details?id=com.figma.mirror";
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  // Redirect to the App Store for iOS users
  window.location.href = "https://itunes.apple.com/app/figma-mirror/id1152747299";
} else {
  // Redirect to the Figma project for desktop users
  window.location.href = "https://embed.figma.com/proto/lPOfctNuCvyMTKD2MaszOG/App-Mockup?node-id=1-7&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&show-proto-sidebar=1&embed-host=share";
}
