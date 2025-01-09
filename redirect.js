<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>
  <script>
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.figma.mirror";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://itunes.apple.com/app/figma-mirror/id1152747299";
    } else {
      // Show a choice for users
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("redirect-choice").style.display = "block";
      });
    }
  </script>
</head>
<body>
  <p id="redirect-message">Redirecting you to the right destination...</p>

  <div id="redirect-choice" style="display: none;">
    <p>Where would you like to go?</p>
    <a href="figma://file/lPOfctNuCvyMTKD2MaszOG" style="display: block; margin: 10px;">Open in Figma App</a>
    <a href="https://embed.figma.com/proto/lPOfctNuCvyMTKD2MaszOG/App-Mockup?node-id=1-7&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7&show-proto-sidebar=1&embed-host=share" style="display: block; margin: 10px;">Open in Browser</a>
  </div>
</body>
</html>
