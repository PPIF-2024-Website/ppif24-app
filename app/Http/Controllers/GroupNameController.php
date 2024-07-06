<?php

namespace App\Http\Controllers;

use App\Models\GroupName;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGroupNameRequest;
use App\Http\Requests\UpdateGroupNameRequest;
use Illuminate\Http\Request;

class GroupNameController extends Controller
{
    public function getAuth($secret_code)
    {
        try{
            $group = GroupName::where('secret_code', $secret_code)->first();
            if ($group) {
                return response()->json(['message' =>  $group->token]);
            } else {
                return response()->json(['message' => 'Invalid Secret Code'], 404);
            }
        }catch(\Exception $e){
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    public function getGroupName(Request $request)
    {
        try{

            $token = $request->input('token'); 
            $decodeMessage = $request->input('decode_message');
            
            $group = GroupName::where('token', $token)
            ->where('decode_message', $decodeMessage)
            ->first();
            
            if ($group) {
                return response()->json(['group_name' => $group->group_name]);
            } else {
                return response()->json(['message' => 'Pesan Salah'], 404);
            }
        }catch(\Exception $e){
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }
}
