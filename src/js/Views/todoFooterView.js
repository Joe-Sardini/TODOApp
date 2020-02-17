import { elements } from './base';

export const renderFooter = image => {
    if (image){
        elements.TODOBottomSection.style = `background-image:url(${image}); background-size: 300px 200px;`;
        //elements.TODOBottomSection.Background:url(image);
    };
}

