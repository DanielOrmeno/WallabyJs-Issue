import { injectable } from 'inversify';

interface IBreakpointResolver {
    isPortraitHandset(): boolean;
    isLandscapeHandset(): boolean;
    isLandscapeTablet(): boolean;
    isDesktop(): boolean;
    isLargeDesktop(): boolean;
}

@injectable()
class BreakpointResolver implements IBreakpointResolver {
    viewPortX = 0;
    viewPortY = 0;

    private computeViewPort(): void {
        const w = window;
        const d = w.document;
        const e = d.documentElement;
        const g = document.body;

        this.viewPortX = w.innerWidth || e.clientWidth || g.clientWidth || 0;
        this.viewPortY = w.innerHeight || e.clientHeight || g.clientHeight || 0;

        console.log(this.viewPortX + ' ' + this.viewPortY);
    }

    isPortraitHandset(): boolean {
        this.computeViewPort();
        console.log(this.viewPortX + ' ' + this.viewPortY);
        return this.viewPortX < 600;
    }
    isLandscapeHandset(): boolean {
        this.computeViewPort();
        return this.viewPortX >= 600 && this.viewPortX < 960;
    }
    isLandscapeTablet(): boolean {
        this.computeViewPort();
        return this.viewPortX >= 960 && this.viewPortX < 1280;
    }
    isDesktop(): boolean {
        this.computeViewPort();
        return this.viewPortX >= 1280 && this.viewPortX < 1920;
    }
    isLargeDesktop(): boolean {
        this.computeViewPort();
        return this.viewPortX >= 1920;
    }
}

export {
    BreakpointResolver,
    IBreakpointResolver
};
