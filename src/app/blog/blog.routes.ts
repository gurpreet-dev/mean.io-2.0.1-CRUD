import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';


export const routes = [
    {
        path: '', children: [
            { path: '', component: BlogListComponent },
            { path: 'new', component: BlogNewComponent },
            { path: 'edit/:id', component: BlogEditComponent }
        ]
    },
];