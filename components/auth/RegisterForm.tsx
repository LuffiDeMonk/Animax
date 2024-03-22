'use client'

import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage

} from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import CardWrapper from './CardWrapper'
import { RegisterFormSchema } from '@/schema/RegisterForm'
import { useFormState } from 'react-dom'
import { register } from '@/app/actions/register'
import FormError from './FormError'

const initialState = {
    type: '',
    message: ''
}

export default function RegisterForm() {
    const [state, formAction] = useFormState(register, initialState)
    const form = useForm<z.infer<typeof RegisterFormSchema>>(
        {
            resolver: zodResolver(RegisterFormSchema),
            defaultValues: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    )
    const onSubmit: SubmitHandler<z.infer<typeof RegisterFormSchema>> = async (data) => {
        await formAction(data)
    }
    return (
        <CardWrapper
            cardTitle='Register'
            footerTitle='Already have an account? Log In'
            footerLink='/login'
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-2'
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='John Doe' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='example@gmail.com' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder='***********' type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder='***********' type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {state.type !== '' && <FormError state={state} />}
                    <Button className='w-full'>Log in</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
