/**
 * Host half of the ambient-pet bundle.
 *
 * Everything the user sees is drawn by the Client module (`./client`): a
 * document-level wallpaper plus one `shell.overlay` entry. The Host half has
 * nothing to register, so it only exists to give the bundle a Loader row.
 */
export function apply() {}
