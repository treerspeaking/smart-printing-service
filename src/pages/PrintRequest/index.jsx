
import { AuthProvider } from '../../contexts/AuthContext.jsx';
import { PrinterProvider } from '../../contexts/PrinterContext.jsx';
import { PrintingLogProvider } from '../../contexts/PrintingLogContext.jsx';
import { PrintRequestContent } from "./PrintRequestContent.jsx"


export default function HomePage() {

    return (
        <AuthProvider>
            <PrinterProvider>
                <PrintingLogProvider>
                    <PrintRequestContent/>
                </PrintingLogProvider>
            </PrinterProvider>
        </AuthProvider>
    );
}

