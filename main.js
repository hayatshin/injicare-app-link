document.addEventListener("DOMContentLoaded", (event) => {
  const platform = detectPlatform();

  const redirectUrl =
    platform === "iOS" || platform === "MacOS"
      ? "https://hayatshin.github.io"
      : "injicare-hayat://hayat.com";

  window.location.href = redirectUrl;
});

function detectPlatform() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  if (/Win/i.test(userAgent)) {
    return "Windows";
  }

  if (/Mac/i.test(userAgent)) {
    return "MacOS";
  }

  if (/Linux/i.test(userAgent)) {
    return "Linux";
  }

  return "Unknown";
}
