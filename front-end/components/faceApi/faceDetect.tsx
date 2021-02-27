// import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';
import { useState, useEffect } from 'react';
import RandomReaction from '../logs/timeCounter/randomReaction';
import { Progress } from 'antd';
const FaceDetect = ({ visible, setIsAuth }: any) => {
    useEffect(() => {
        console.log(visible);
        Webcam();
    }, [visible == true])
    const [name, setName] = useState('');
    const [reactions, setReactions] = useState('');
    const [persent, setPercent] = useState<any>([]);
    const TransformText = (text: any) => {
        let str = text.indexOf("(");
        str = text.slice(0, str - 1)
        return str;
    }
    async function Webcam() {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/static/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/static/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/static/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/static/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/static/models'),
        ]).then(startVideo)
        const video: any = document.getElementById('video');

        function stopVideoOnly(stream: any) {
            stream.getTracks().forEach(function (track: any) {
                if (track.readyState == 'live' && track.kind === 'video') {
                    track.stop();
                }
            });
        }

        function startVideo() {
            visible ? navigator.getUserMedia(
                { video: {} },
                stream => video.srcObject = stream,
                err => console.error(err)
            ) : navigator.getUserMedia(
                { video: {} },
                stream => video.srcObject = stopVideoOnly(stream),
                err => console.error(err)
            )
        }
        visible && video.addEventListener('play', () => {
            const canvas: any = faceapi.createCanvasFromMedia(video);
            document.body.append(canvas);
            const displaySize = { width: video.width, height: video.height }
            faceapi.matchDimensions(canvas, displaySize);

            let labeledFaceDescriptors: any;
            (async () => {
                labeledFaceDescriptors = await loadLabeledImages();
            })();

            visible && setInterval(async () => {
                const detections: any = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks()
                    .withFaceDescriptors()
                    .withFaceExpressions()
                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                if (labeledFaceDescriptors) {
                    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);
                    const results = resizedDetections.map((data: any) => faceMatcher.findBestMatch(data.descriptor));
                    // console.log(results);
                    results.forEach((result: any, i: any) => {
                        const box: any = resizedDetections[i].detection.box;
                        // console.log(resizedDetections[i].expressions);
                        let obj: any = resizedDetections[i].expressions;
                        let max: any = Math.max(...Object.values<any>(obj));
                        let arr: any = Object.values(obj).map((value: any, index: any) => {
                            if (value === max) {
                                return index;
                            }
                            return 0;
                        });
                        setReactions(Object.keys(obj)[Math.max(...arr)]);
                        setName(result.toString());
                    });
                }
            }, 100);
        })

        const loadLabeledImages = () => {
            const labels = ['Affan', 'Arim', 'Iffan']
            return Promise.all(
                labels.map(async label => {
                    const descriptions = []
                    for (let i = 1; i <= 1; i++) {
                        const img = await faceapi.fetchImage(`/static/images/${label}/${i}.jpg`)
                        const detections: any = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor().withFaceExpressions()
                        descriptions.push(detections.descriptor)
                    }
                    return new faceapi.LabeledFaceDescriptors(label, descriptions)
                })
            )
        }
    }
    console.log(persent);

    return (
        <div>
            <video id="video" height="400px" width="470px" autoPlay muted />
            <h5>Name : {name}</h5>
            <RandomReaction reaction={reactions} setIsAuth={setIsAuth} name={name} setPercent={setPercent} />
            <h5>Reactions : {reactions}</h5>
            <div>
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#00B0FF',
                    }}
                    percent={(persent.length / 2) * 100}
                    status="active"
                />
            </div>
            {/* {setIsAuth ? setIsAuth(TransformText(name)) : ""} */}
        </div>
    )
}
export default FaceDetect;