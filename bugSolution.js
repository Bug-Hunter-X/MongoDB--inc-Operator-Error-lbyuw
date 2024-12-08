```javascript
// Correct usage of $inc operator, handling cases where the field might not exist
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{field:1}, $setOnInsert:{field:0}});
```