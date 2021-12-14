export const isAppleDevice = () => {
  var userAgent = navigator.userAgent || navigator.vendor;

  if ((/iPad|iPhone|iPod/.test(userAgent) || navigator.userAgent.indexOf('Mac OS X') != -1) && !window.MSStream) {
    return true
  } else {
    return false
  }
}