
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/cv" | "/products";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/cv": Record<string, never>;
			"/products": Record<string, never>
		};
		Pathname(): "/" | "/cv" | "/cv/" | "/products" | "/products/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/img/ADDSTRAP.webp" | "/img/Credit_Card.webp" | "/img/disposable_vapes.webp" | "/img/Flava_Tips.webp" | "/img/IMG_6332_1.webp" | "/img/IMG_6684.webp" | "/img/Impervious_Drip_tips.webp" | "/img/Quick_Caps_Aldridge.webp" | "/img/T-Shirt_Printer.webp" | "/img/Vape_Any_Wear.webp" | string & {};
	}
}