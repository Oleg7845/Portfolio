import IProduct from './IProduct.interface';

interface ISmartphone extends IProduct{
    characteristics: {
        OS: String,
        processor: String,
        processor_frequency: String,
        RAM: String,
        memory: String,
        display: {
            diagonal: String,
            resolution: String
        },
        camera: {
            resolution: String,
            integrated_flash: String,
            face_detection: String
        },
        functions: {
            fingerprint: String,
            GPS_module: String,
            Dual_SIM: String
        },
        battery: {
            type: String
            capacity: String
        }
    }
}

export default ISmartphone;