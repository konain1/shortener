// Import necessary modules and set up a unique ID generator
const URL = require('../model/urlmodel');  // Import the Mongoose model for URL
const ShortUniqueId = require('short-unique-id');  // Import the ShortUniqueId library for generating unique IDs
const uid = new ShortUniqueId({ length: 10 });  // Initialize the unique ID generator with a length of 10 characters

// Handle the generation of a new short ID for a given URL
async function HandlerGenerateNewShortId(req, res) {
    try {
        // Extract the URL from the request body
        let url = req.body.url;
        let user = req.user._id
        // Generate a new short ID
        let shorten = uid.rnd();
        // Create a new document in the URL collection with the generated short ID and provided URL
        await URL.create({
            shortid: shorten,
            redirectURL: url,
            createdBy:user,
            visithistory:[]
        });

        let data =   await URL.find()

  res.render('homepage',{ data })

    } catch (error) {
        // Handle errors gracefully by logging and sending an internal server error response
        console.error("Error generating new short ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Handle visits to a short URL, updating visit history and redirecting to the original URL
async function visitbyShortURL(req, res) {
    try {
        // Extract the short ID from the request parameters
        let shortid = req.params.shortid;

        // Find the corresponding document and update its visit history with the current timestamp
        let entry =  await URL.findOneAndUpdate({ shortid: shortid }, {
            $push: {
                visithistory: {
                    timestamp: Date.now()
                }
            }
        });

        // Redirect to the original URL associated with the short ID
        res.redirect(entry.redirectURL);
    } catch (error) {
        // Handle errors gracefully by logging and sending an internal server error response
        console.error("Error updating document:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Retrieve all shortened URLs from the database
async function GetData(req, res) {
    // Fetch all documents from the URL collection
    let userid = req.user;

    let shortenURLs = await URL.find({createdBy:userid._id});

    // Respond with the retrieved shortened URLs
    let shortids = []
    for (const key in shortenURLs) {
        console.log(shortenURLs[key].shortid)
        shortids.push(shortenURLs[key].shortid)
    }
    res.json({ msg: shortids });
}

// Handle the home page request, responding with a simple message
async function homelander(req, res) {
    
   // Respond with a message for the home page
//    res.json({ msg: "homelander" });
   // Alternatively, if rendering a view, you can uncomment the line below

   res.render('home');
}

async function homepage(req,res){
    let user = req.user._id
    console.log(user)
      let data =   await URL.find()

  res.render('homepage',{
    data
  })
}

async function analytics(req,res){
    let shortid = req.params.shortid;

    let result = await URL.findOne({shortid})

    res.json({traffic:result.visithistory.length})
}


// Export the functions to be used in other parts of the application
module.exports = { HandlerGenerateNewShortId, GetData, homelander, visitbyShortURL ,analytics ,homepage} ;
