import mongoose from "mongoose"

const connectDB = async () => {
    const uriLocal = process.env.DB_URI
    
    mongoose.set('toJSON', {
        virtuals: true,
        transform: (doc, converted) => {
          delete converted._id;
        }
      });
      
    try {
        await mongoose.connect(uriLocal, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected')
    } catch (error) {
        console.error('Database connection error:', error)
        process.exit(1);
    }
};
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Databse Connected Once')
})
export default connectDB