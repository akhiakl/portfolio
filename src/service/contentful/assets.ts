import type { Asset, AssetFragmentFragment } from "@/generated/graphql/graphql";

export type AssetData = {
    width?: number | null;
    height?: number | null;
    title?: string | null;
    description?: string | null;
    fileName?: string | null;
    url?: string | null;
    sys: {
        id: string;
    };
}

export function getAssetData(asset: AssetFragmentFragment | null | undefined): AssetData | null {
    if (!asset) return null;

    return {
        width: asset.width,
        height: asset.height,
        title: asset.title,
        description: asset.description,
        fileName: asset.fileName,
        url: asset.url,
        sys: {
            id: asset.sys.id
        }
    };
}
