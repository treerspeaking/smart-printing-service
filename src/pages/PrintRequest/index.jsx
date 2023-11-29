
import { AuthProvider } from '../../contexts/AuthContext.jsx';
import { PrinterProvider } from '../../contexts/PrinterContext.jsx';
import { PrintRequestContent } from "./PrintRequestContent.jsx"


export default function HomePage() {

    return (
        <AuthProvider>
            <PrinterProvider>
                <PrintRequestContent />
            </PrinterProvider>
        </AuthProvider>
    );
}

