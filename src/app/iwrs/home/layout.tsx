import FooterOptions from '@/components/footer-options/footer-options';
import React from 'react'

interface LayoutProps {
    children: React.ReactNode;
}
const ReportsLayout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        {children}
        <FooterOptions />
    </div>
  )
}

export default ReportsLayout