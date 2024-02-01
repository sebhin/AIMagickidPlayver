import { forwardRef } from 'react';
import '../styles/WideViewModal.scss';
import '../styles/WritingDetailModal.scss';
import '../styles/Print.scss';
import RenderTextWithBreaks from './RenderTextWithBreaks';

const Print = forwardRef((props, ref) => {
    if (props.type === 'drawing') {
        return (
            <section
                ref={ref}
                className="wide-view-modal print-page"
            >
                <figure className="wide-image">
                    <img
                        src={props.image}
                        alt="image"
                    />
                </figure>
            </section>
        );
    } else if (props.type === 'writing') {
        return (
            <section
                ref={ref}
                className="print-detail-modal print-page"
            >
                <div className="inner">
                    <figure>
                        {/* 2024-02-01 | print-paper 변경 */}
                        <img
                            src={'/images/print-paper-2.svg'}
                            alt="writing-detail-paper"
                        />
                    </figure>
                    <div className="writing-conts">
                        <h3 className="writing-tit">{props.text.title}</h3>
                        <div className="writing-all">
                            <RenderTextWithBreaks text={props.text.creation} />
                        </div>
                    </div>
                </div>
            </section>
        );
    } else return null;
});

export default Print;
