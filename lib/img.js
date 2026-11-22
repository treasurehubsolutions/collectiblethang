// Reduit la taille des photos eBay (s-l1600) selon l'usage. Les autres URL restent inchangees.
export function ebaySize(url, size) {
  if (typeof url !== 'string') return url
  return url.replace(/\/s-l\d+\.(jpg|jpeg|png|webp)(\?.*)?$/i, '/s-l' + size + '.$1')
}
