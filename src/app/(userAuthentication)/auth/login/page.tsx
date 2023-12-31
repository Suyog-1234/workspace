import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='form-wrapper'>
            <form action="">
                <div className="form-title mb-8">
                    <h3 className='text-center text-white text-xl font-500 mb-2'>Login</h3>
                    <p className='text-gray-intensity-9 font-500 text-xs text-center'>Login And Start hitting the ground running.</p>
                </div>
                <div className="form-filds">
                    <div className="form-group mb-6">
                        <Label className='text-white mb-2 text-sm font-500 block' title='Email'>
                            Email
                        </Label>
                        <Input className='border-white/30 focus:border-white' />
                    </div>
                    <div className="form-group">
                        <Label className='text-white mb-2 text-sm font-500 block' title='Email'>
                            Password
                        </Label>
                        <Input className='border-white/30 focus:border-white' />
                    </div>
                </div>
                <div className="form-action mt-8">
                    <Button className='w-full'>
                          Login
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default page