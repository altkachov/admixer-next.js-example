import {useEffect, useMemo} from "react";
import Link from "next/link";
declare const admixerML: any;
export default function PageWithAd() {
    // create an uniq id for ad placement
    // be sure that you use effects to prevent generation on each render cycle.
    // also you can use static id, but remember that id must be unique for the whole page.
    const adPlaceholderId = useMemo(
        () => `ad-id-${Math.random()}`,
        [],
    );
    // initialize ad slots.
    // must be called only once when the placement first time appears on the page.
    useEffect(() => {
        admixerML.fn.push(function () {
            admixerML.defineSlot({
                item: 'f7668d68-69c0-4c5d-9ad2-146de349bff3',
                ph: adPlaceholderId,
                i: 'inv-nets'
            });
            admixerML.singleRequest();
            admixerML.display(adPlaceholderId);
        });
        // don't forget to call clear for slots that removed from the page.
        return () => admixerML.fn.push(() => admixerML.clear(adPlaceholderId));
    }, [adPlaceholderId]);
    return (
        <>
            <div>
                <Link href={"/"} > Home </Link>
            </div>
            {/* and the last, but not least. add placement to the page. */}
            <div id={adPlaceholderId}></div>
        </>
    )
}