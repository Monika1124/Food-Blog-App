import React from 'react'

export default function Modal({children, onClose}) {
  return (
    <>
        <div className='backdrop' onClick={onClose}></div>
        <dialog className='modal' open>
          {children}
        </dialog>
 
    </>
    
  )
}
// This component renders a modal dialog with a backdrop.
// The `children` prop allows you to pass in any content you want to display inside the modal.
// The `onClose` prop is a function that will be called when the backdrop is clicked, allowing you to close the modal.
// The `dialog` element is used to create the modal, and the `open` attribute makes it visible.
// The `backdrop` class is used to style the background overlay, while the `modal` class styles the dialog itself.
// The modal can be closed by clicking on the backdrop, which triggers the `onClose` function passed as a prop.
// This component is useful for displaying forms, alerts, or any other content that requires user interaction without navigating away from the current page.
