/** Office photos used on service pages — pick distinct ones so a page never repeats. */
export const SERVICE_PAGE_PHOTOS = [
  "/images/DSC09901.JPG",
  "/images/DSC09781.JPG",
  "/images/DSC09794.JPG",
  "/images/DSC09879.JPG",
  "/images/DSC09845.JPG",
  "/images/DSC09669.JPG",
  "/images/DSC09894.JPG",
  "/images/bgimage.JPG",
  "/images/bgimagetwo.JPG",
  "/images/ukPageImg/bookkeepingimage.png",
];

/**
 * Returns one unique src per slot. If a preferred path is missing or already
 * used on the same page, the next unused photo from SERVICE_PAGE_PHOTOS is used.
 */
export function uniquePagePhotos(preferred = []) {
  const used = new Set();
  return preferred.map((src) => {
    let pick = src && !used.has(src) ? src : null;
    if (!pick) {
      pick =
        SERVICE_PAGE_PHOTOS.find((photo) => !used.has(photo)) ||
        SERVICE_PAGE_PHOTOS[0];
    }
    used.add(pick);
    return pick;
  });
}
