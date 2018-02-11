export function shorten(string: string, length: number) {
    const ELLIPSIS = '...';
    if (string.length > length) {
        return string.substr(0, length - ELLIPSIS.length) + ELLIPSIS;
    }
    return string;
}
