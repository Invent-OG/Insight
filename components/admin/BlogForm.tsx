// 'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { useCreateBlog, useUpdateBlog } from '@/lib/queries/blogs';
// import { toast } from 'sonner';
// import { supabase } from '@/lib/supabase/client';
// import { Textarea } from '../ui/textarea';
// import Image from 'next/image';

// const blogSchema = z.object({
//   title: z.string().min(2, 'Title must be at least 2 characters'),
//   excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
//   content: z.string().min(50, 'Content must be at least 50 characters'),
//   imageUrl: z.string().url('Image upload is required'),
//   category: z.string().min(2, 'Category must be at least 2 characters'),
// });

// type BlogFormData = z.infer<typeof blogSchema>;

// interface BlogFormProps {
//   onClose: () => void;
//   initialData?: BlogFormData & { id: string };
// }

// export default function BlogForm({ onClose, initialData }: BlogFormProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);

//   const createBlogMutation = useCreateBlog();
//   const updateBlogMutation = useUpdateBlog();

//   const form = useForm<BlogFormData>({
//     resolver: zodResolver(blogSchema),
//     defaultValues: initialData || {
//       title: '',
//       excerpt: '',
//       content: '',
//       imageUrl: '',
//       category: '',
//     },
//   });

//   const handleImageUpload = async (file: File) => {
//     const fileExt = file.name.split('.').pop();
//     const fileName = `${Date.now()}.${fileExt}`;
//     const filePath = `blogs/${fileName}`;

//     const { error } = await supabase.storage.from('images').upload(filePath, file);
//     if (error) throw new Error('Image upload failed');

//     const { data } = supabase.storage.from('images').getPublicUrl(filePath);
//     return data.publicUrl;
//   };

//   const onSubmit = async (data: BlogFormData) => {
//     setIsSubmitting(true);
//     try {
//       if (initialData?.id) {
//         await updateBlogMutation.mutateAsync({ id: initialData.id, data });
//       } else {
//         await createBlogMutation.mutateAsync(data);
//       }
//       toast.success(initialData ? 'Blog updated' : 'Blog created');
//       onClose();
//     } catch {
//       toast.error('Failed to submit blog');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className='bg-card rounded-lg p-6'>
//       <div className='flex justify-between items-center mb-6'>
//         <h2 className='text-xl font-semibold'>
//           {initialData ? 'Edit Blog Post' : 'Create New Blog Post'}
//         </h2>
//         <Button variant='ghost' onClick={onClose}>
//           Cancel
//         </Button>
//       </div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
//           {/* Title */}
//           <FormField
//             control={form.control}
//             name='title'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Title</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder='Enter blog title' />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Category */}
//           <FormField
//             control={form.control}
//             name='category'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Category</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder='Enter blog category' />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Excerpt */}
//           <FormField
//             control={form.control}
//             name='excerpt'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Excerpt</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder='Short summary' />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Content with Rich Editor */}
//           <FormField
//             control={form.control}
//             name='content'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Content (Rich Text)</FormLabel>
//                 <FormControl>
//                   <Textarea
//                     {...field}
//                     placeholder='Write your blog content here...'
//                     className='h-64'
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Toggle Preview */}
//           <div className='flex justify-end lg:py-6 py-10'>
//             <Button type='button' variant='outline' onClick={() => setShowPreview(!showPreview)}>
//               {showPreview ? 'Hide Preview' : 'Show Preview'}
//             </Button>
//           </div>

//           {/* Preview Section */}
//           {showPreview && (
//             <div className='border rounded p-4 bg-white shadow-inner prose max-w-none overflow-auto'>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: form.watch('content'),
//                 }}
//               />
//             </div>
//           )}

//           {/* File Upload */}
//           <FormItem>
//             <FormLabel>Upload Image</FormLabel>
//             <FormControl>
//               <Input
//                 type='file'
//                 accept='image/*'
//                 onChange={async (e) => {
//                   const file = e.target.files?.[0];
//                   if (!file) return;
//                   try {
//                     const url = await handleImageUpload(file);
//                     form.setValue('imageUrl', url);
//                     toast.success('Image uploaded successfully');
//                   } catch {
//                     toast.error('Image upload failed');
//                   }
//                 }}
//               />
//             </FormControl>
//             {form.watch('imageUrl') && (
//               <Image
//                 src={form.watch('imageUrl')}
//                 alt='Preview'
//                 className='mt-4 w-full max-h-48 object-cover rounded-md'
//               />
//             )}
//             <FormMessage />
//           </FormItem>

//           {/* Submit Button */}
//           <div className='flex justify-end gap-4'>
//             <Button
//               type='submit'
//               disabled={
//                 isSubmitting || createBlogMutation.isPending || updateBlogMutation.isPending
//               }
//             >
//               {isSubmitting ? 'Saving...' : initialData ? 'Update Blog' : 'Create Blog'}
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// }

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateBlog, useUpdateBlog } from '@/lib/queries/blogs';
import { toast } from 'sonner';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RichTextEditor from './RichTextEditor';
import BlogPreview from './BlogPreview';
import ImageUpload from './ImageUpload';

const blogSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  imageUrl: z.string().min(1, 'Featured image is required'),
  category: z.string().min(2, 'Category must be at least 2 characters'),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface BlogFormProps {
  onClose: () => void;
  initialData?: BlogFormData & { id: string };
}

export default function BlogForm({ onClose, initialData }: BlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('edit');
  const createBlogMutation = useCreateBlog();
  const updateBlogMutation = useUpdateBlog();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialData || {
      title: '',
      excerpt: '',
      content: '',
      imageUrl: '',
      category: '',
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      if (initialData?.id) {
        await updateBlogMutation.mutateAsync({ id: initialData.id, data });
      } else {
        await createBlogMutation.mutateAsync(data);
      }
      toast.success(initialData ? 'Blog updated successfully' : 'Blog created successfully');
      onClose();
    } catch (error) {
      toast.error(initialData ? 'Failed to update blog' : 'Failed to create blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-card rounded-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold'>
          {initialData ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>
        <Button variant='ghost' onClick={onClose}>
          Cancel
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className='mb-6'>
          <TabsTrigger value='edit'>Edit</TabsTrigger>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
        </TabsList>

        <TabsContent value='edit'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Enter blog title' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Enter blog category' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='excerpt'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Enter blog excerpt' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <RichTextEditor content={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='imageUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        bucket='images/blogs'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-end gap-4'>
                <Button
                  type='submit'
                  disabled={
                    isSubmitting || createBlogMutation.isPending || updateBlogMutation.isPending
                  }
                >
                  {isSubmitting ? 'Saving...' : initialData ? 'Update Blog' : 'Create Blog'}
                </Button>
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value='preview'>
          <BlogPreview
            title={form.watch('title')}
            content={form.watch('content')}
            imageUrl={form.watch('imageUrl')}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
