import Blog from '../models/blog.model';

function create(req, res) {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content
    });
    
    blog.save(function(err){
        if(err){
            res.json({ status:false, message: err });
        }else{
            res.json({ status:true, message: 'Blog created!' });
        }
    });
}

function list(req, res){
    Blog.find({}, function(err, blog){
        if (err) 
            return res.send(err);
        else
            return res.json(blog);
    }).sort( { '_id': -1 } );
}

function get(req, res){
    
    Blog.findOne({'_id':req.params.id},function(err, data){
        if(err){
            res.json({status: false, message: 'Unable to fetch data!', error: err});
        }else{
            res.json({status: true, message: 'Fetched successfully!', data: data});
        }
    })
}

function update(req, res){

    Blog.findById(req.params.id, function(err, blog){
        if(err){
            res.json({status: false, message: "Blog not found with this ID", error: err});
        }else{
            blog.title = req.body.title;
            blog.content = req.body.content;

            blog.save(function(err){
                if(err){
                    res.json({status: false, message: "Error in updating blog", error: err});
                }else{
                    res.json({ message: 'Blog updated!' });
                }
            });

        }
    });
}

function remove(req, res){

    Blog.findById(req.params.id, function(err, user){
        if(err){
            res.json({status: false, message: err, error: err});
        }else{
            Blog.remove({'_id':req.params.id}, function(err){
                if(err){
                    res.json({status: false, message: "Error in deleting blog", error: err});
                }else{
                    res.json({status: true, message: "Blog Deleted" });
                }
            })
        }
    })
}

export default { create, list, get, update, remove };