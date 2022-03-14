import mongoose from 'mongoose';

const RequestLogSchema = new mongoose.Schema({  
  date: Date,  
  path: String,
  method: String,
  metadata: Object
});  

export default mongoose.model('RequestLog', RequestLogSchema); 