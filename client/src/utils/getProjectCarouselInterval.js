import { PROJECT_CAROUSEL_INTERVAL } from '@/constants';

export const getProjectCarouselInterval = () => {
    return PROJECT_CAROUSEL_INTERVAL + (100 * Math.abs(0.7 - Math.random()));
};