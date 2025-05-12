import React from 'react'
import styles from './uploadcard.module.scss';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { IUploadCardTypes } from '../../types/trial.types';

interface UploadCardProps {
    data: IUploadCardTypes;
    viewSelectedUploadFile: (url: string) => void;
    removeSelectedUploadFile: (id: string)=> void;
}

const UploadCard: React.FC<UploadCardProps> = ({ data,viewSelectedUploadFile, removeSelectedUploadFile }) => {
    return (
        <div key={data.id} className={styles.uploadedFileDoc}>
            <div className={styles.iconsContainer}>
                <Image src="/images/pdf.png" alt="" width={50} height={75} />

                {/* Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Ellipsis className={styles.moreOptionsIcon} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={()=>viewSelectedUploadFile(data.url)}>View</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>removeSelectedUploadFile(data.id)}>Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className={styles.fileDetails}>
                <span className={styles.fileCategory}>{data.docCategory}</span>

                <h2 className={styles.fileName}>{data.docName}</h2>
                <Progress className={styles.progressBar} value={data.progress} />
                <p>
                    {data.uploadDate} - {data.docSize}
                </p>
            </div>
        </div>
    )
}

export default UploadCard