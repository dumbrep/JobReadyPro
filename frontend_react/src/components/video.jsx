import { useEffect , useRef , useState } from "react";
import "./video.css"


const Video = ()=>{
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const ws = useRef(null);

  const stream = useRef(null)

  const [emotion, setEmotion] = useState("waiting to connect with Face analysis backend")
  const [eyeContact,setEyeContact] = useState("")
 

  useEffect(()=>{
    ws.current = new WebSocket("ws://127.0.0.1:8000/video");
    ws.current.onopen = () => console.log("WebSocket Connected");
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data)
      setEmotion(data.emotion );
      setEyeContact(data.eye_contact ? "" : "Eye Contact not maintained");
    };
    ws.current.onerror = (error) => console.log("WebSocket Error: ", error);
    ws.current.onclose = () => console.log("WebSocket Disconnected");

    return () => ws.current.close();
  },[])

  useEffect(()=>{
    const startCamera = async ()=>{
      try{
        stream.current = await navigator.mediaDevices.getUserMedia({video : true})
        if(videoRef.current){
          videoRef.current.srcObject = stream.current
        }
      }catch(error){
        console.log("Error while accessing the camera")
      }
    } 

    startCamera()

    return ()=>{
      if (stream.current) {
        stream.current.getTracks().forEach(track => track.stop()); // Stop video on unmount
      }
    }
  },[]);

  useEffect(()=>{
    const interval = setInterval(()=>{captureImage()},3000)
    return ()=>{clearInterval(interval)}
  },[])

  const captureImage = async () => {
    if (!videoRef.current || !canvasRef.current || !ws.current || ws.current.readyState !== WebSocket.OPEN) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      console.log("Video not loaded yet");
      return;
    }
  
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    canvas.toBlob(async (blob) => {
      if (blob) {
        await sendToBackend(blob);
      } else {
        console.log("Failed to create blob from canvas");
      }
    }, "image/jpeg");
  };


  const sendToBackend = async (blob)=>{
    ws.current.send(blob);
  }  

  return (
    
    <div >
      <div className="face_analysis">
        <div className="emotions">
          {emotion}
        </div>
        <div className="eye_contact">
          {eyeContact}
        </div>
      </div>
      <video ref={videoRef} autoPlay width="700px" height="500px" style={{ border: "1px solid black" }}></video>
      <canvas ref={canvasRef} width="700" height="500" style={{ display: "none" }}></canvas>
      
    </div>
    
  )

}

export default Video;