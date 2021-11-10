
export default function handler(req, res) {
  res.status(200).json({
    id: Number(req.query.id), 
    name: 'John Doe' 
  })
}
