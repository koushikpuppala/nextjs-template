import * as admin from 'firebase-admin'
import { firebaseAdminConfig } from './config'

export const adminApp =
	admin.apps.find(app => app?.name === 'nextjs-admin') ??
	admin.initializeApp(firebaseAdminConfig, 'nextjs-admin')

export const adminAuth = admin.auth(adminApp)
