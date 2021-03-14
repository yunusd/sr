import { useState } from "react"

const useModal = () => {
    const [show, setModalVisible] = useState(false);
    
    const handleModal = () => {
        setModalVisible(!show)
    }
    
    return {show, handleModal}
}

export default useModal;