kiwi.plugin('url-channels-rewriter', function (kiwi, log) {
    const Misc = kiwi.require('helpers/Misc');
    const queryChans = Misc.queryStringVal('channels') || '';
    if (!queryChans) {
        // no channels query param
        return;
    }

    const hashChans = decodeURIComponent(window.location.hash) || '';

    // build channels array
    const channels = (hashChans + ',' + queryChans)
        .trim()
        .split(',')
        .filter((c) => !!c)
        .map((c) => c[0] !== '#' ? '#' + c : c)
        .filter((c, pos, self) => c.length >= 2 && self.indexOf(c) === pos);

    if (window.history.pushState) {
        // update url to remove channels query param
        const url = new URL(window.location);
        url.searchParams.delete('channels');
        window.history.pushState({}, '', url);
    }

    // add all channels to location hash
    window.location.hash = channels.join(',');
});
